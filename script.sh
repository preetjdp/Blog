# I can choose multiple folders with {} and random depth levels with **
for file in ./components/**/*.js
do
  mv "$file" "${file%.js}.tsx"
done
