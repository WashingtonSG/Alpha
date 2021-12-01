echo "Use dot . the decimal numbers"
echo "Insert your weight(KG)"
read weight
echo "Insert your height(M) "
read height

echo "scale=2; $weight / ($height * $height)" | bc
