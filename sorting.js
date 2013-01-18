function try_sort(array)
{
	return array.sort(function(x, y) {return Math.random() < 0.5 ? -1 : 1});
}

function check_sort(array)
{
	for (var i = 0; i < araay.length - 1; i++)
	{
		if (array[i] > array[i + 1])
		{
			return false;
		}
	}
	return true;
}

function array_cmp(arrayA, arrayB)
{
	if (arrayA.length != arrayB.length)
	{
		return arrayA.length - arrayB.length;
	}

	for (var i = 0; i < arrayA.length; i++)
	{
		if (arrayA[i] != arrayB[i])
		{
			return arrayA[i] - arrayB[i];
		}
	}

	return 0;
}

function srt()
{
var N = 5;

var array = [];
var check = [];
for (var i = 0; i < N; i++){array.push(Math.random()); check.push(array[array.length - 1])}
check.sort(function(x, y){return x - y;})
var tries = 0;

while (array_cmp(check, array) != 0)
{
	tries ++;	
	array = try_sort(array);
}
	return tries;
}



var results = [];
var sum = 0;

var N = 1000000;

for (var i = 0; i < N; i++)
{
	var res = srt();
	console.log(i + "\t\t\t" + res);
	results.push(res);
	sum += res;
}

console.log((sum + 0.0) / N)
