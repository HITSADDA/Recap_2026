import express from 'express'
import db from './db/db';

const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.post('/user', async (req, resp) => {
    const { username, email } = req.body;

    const newUser = await db.users.create({
        data: {
            email: email,
            username: username
        },
    });

    resp.status(200).json({ User: newUser, status: 'ok' })
})

app.get('/user', async (req, resp) => {
    const { email } = req.query;


    const user = await db.users.findFirst({
        where: {
            email: email as string
        },
        // include: { posts: true, profile: true },
        select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,

            posts: {
                select: {
                    id: true,
                    title: true
                    // userId is intentionally not selected
                }
            },

            profile: {
                select: {
                    id: true,
                    bio: true
                    // userId is intentionally not selected
                }
            }
        }
    })

    resp.status(200).json({ User: user, status: 'ok' })
})

app.post('/post', async (req, resp) => {
    const { userId, title } = req.body;

    const post = await db.post.create({
        data: {
            userId: userId,
            title: title
        }
    })

    resp.status(200).json({ post: post, status: 'ok' })
})

app.post('/profile', async (req, resp) => {
    const { userId, bio } = req.body;

    const profile = await db.profile.create({
        data: {
            bio: bio,
            userId: userId
        }
    })

    resp.status(200).json({ profile, status: 'ok' })
})

app.listen(3000, () => { console.log('app is listening on http://localhost:3000') })