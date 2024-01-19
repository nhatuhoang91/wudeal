import {createPresignedPost} from '@aws-sdk/s3-presigned-post'
import { S3Client } from '@aws-sdk/client-s3'
import {v4 as uuidv4} from 'uuid'
import {auth} from '@clerk/nextjs'

export async function POST(request : Request) {
    try{
        const {userId} = auth()
        if(!userId){
            return Response.json(
                {
                    error: 'unauthorized',
                    code : 401
                })
        }

        const {filename, contentType} =  await request.json()
        const key = `${filename}_${uuidv4()}`
        console.log('Key : ' + key)
        const client = new S3Client(
            {region: process.env.AWS_REGION}
        )
        const {url , fields} = await createPresignedPost(client, {
            Bucket: process.env.AWS_BUCKET_NAME as string,
            Key : key,
            Conditions:[['content-length-range', 0, 1000000],
            ['starts-with', '$Content-Type', contentType]
        ],
        Fields:{
            'Content-Type':  contentType },
            Expires : 600,
        })
        console.log('fields : '+ JSON.stringify(fields))
        return Response.json({url, fields})
    }catch(error){
        return Response.json({error: error})
    }
}