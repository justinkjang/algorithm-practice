#Above Average-BOJ 4344

c = int(input())

for _ in range(c):
  nums=list(map(int,input().split()))

  students=nums[0]
  scores=nums[1:]
  avgScore=sum(scores)/students

  count=0
  for i in scores:
    if i > avgScore:
      count+=1
  
  reality= count/students*100
  print(f'{reality:.3f}%')