# Sveltekit with Graphcms - Authentication

This respository is the the result from two very good articles 

1. "Authentication in SvelteKit using cookies" from Jannik Wempe (you can read [here](https://blog.logrocket.com/authentication-sveltekit-using-cookies/))
2. "Next.js Authentication with NextAuth.js and GraphCMS" from Jamie Barton (you can read [here](https://graphcms.com/blog/nextjs-authenticaton-with-nextauth-and-graphcms))
    [Scott Spence](https://scottspence.com/) suggested it to me

and 

  of course the very good resources from [Scott Spence](https://scottspence.com/) 
  
### 1.Create a new GraphCMS project. 
   Read: [Next.js Authentication with NextAuth.js and GraphCMS](Next.js Authentication with NextAuth.js and GraphCMS)
    
### 2.Create a Model with two fields Email and Password
![image](https://user-images.githubusercontent.com/20041017/145402569-47be061c-6f94-4287-b0d4-246ca549154f.png)

### 3.Create the file .env and add your GraphCMS endpoint and token:
  
GRAPHCMS_ENDPOINT=\
GRAPHCMS_TOKEN=

### Get it Running
1. Clone the repo
2. npm install
3. npm run dev
4. [http://localhost:3000](http://localhost:3000)
