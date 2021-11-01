#BOJ-4673 Self Number

numList=set(range(1,10_001))

generated=set()

for num in numList:
  for n in str(num):
    num += int(n)
  generated.add(num)

selfNumbers=numList-generated

for i in sorted(selfNumbers):
  print(i)