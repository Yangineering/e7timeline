 #!/usr/bin/bash 

 if [ $1 = 'main' ]; then
    echo 'On main. Deploying to production'
    npx vercel --prod --token $VERCEL_AUTH
 else
    echo 'Not on main. Deploying to development'
    npx vercel --token $VERCEL_AUTH
 fi