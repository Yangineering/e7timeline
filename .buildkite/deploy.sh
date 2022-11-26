 #!/usr/bin/bash 

 if [ $1 = 'main' ]; then
    echo 'On main. Deploying to production'
    npx vercel --prod --token=$VERCEL_AUTH_TOKEN
 else
    echo 'Not on main. Deploying to development'
    npx vercel --token=$VERCEL_AUTH_TOKEN
 fi