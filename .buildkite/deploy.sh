 #!/usr/bin/bash 

npm install --global vercel
if [ $1 = 'main' ]; then
   echo 'On main. Deploying to production'
   vercel pull --yes --environment=production --token=$VERCEL_TOKEN
   vercel build --prod --token=$VERCEL_TOKEN
   vercel deploy --prebuilt --prod  --token=$VERCEL_TOKEN
else
   echo 'Not on main. Deploying to development'
   vercel pull --yes --environment=preview --token=$VERCEL_TOKEN
   vercel build --token=$VERCEL_TOKEN
   vercel deploy --prebuilt  --token=$VERCEL_TOKEN
fi