echo "Use dot . the decimal numbers"
echo "Insert your weight(KG)"
read weight
echo "Insert your height(M) "
read height

imc=$(bc <<< "scale=2;$weight/$height")

if [ echo "$imc < 18.5" | bc ] 
then
	result = "magreza"
elif [ "$imc >18.5" | bc ]
then
	result = "saudavel"
elif [ "$imc > 25" | bc ]
then
	result = "sobrepeso"
elif [ "$imc > 30" | bc ]
then
	result = "Obesidade grau I"
elif [ "$imc > 35" | bc ]
then
	result = "Obesidade grau II"
else
	result = "Obesidade grau III"
fi

echo "$result"
