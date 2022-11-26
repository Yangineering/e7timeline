 #!/usr/bin/bash 
 
 if [ $1 = 'main' ]; then
    npx vercel --prod --token $VERCEL_AUTH"
 else
    npx vercel --token $VERCEL_AUTH"
 fi