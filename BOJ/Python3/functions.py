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


#BOJ-1065 한수

def hansu(n):
  
  count=0

  for i in range(1, n+1):
    numList = list(map(int, str(i)))

    if i < 100:
      count+=1
    elif numList[0]-numList[1] == numList[1] - numList[2]:
      count+=1

  return count
  
n = int(input())
print(hansu(n))