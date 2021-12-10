#BOJ 2447 별찍기 - 10

n=int(input())

def recursion(n):
  if n == 1:
    return['*']
  
  star_group = recursion(n//3)
  arr = []

  for star in star_group:
    arr.append(star * 3)
  for star in star_group:
    arr.append(star + ' '*(n//3) + star)
  for star in star_group:
    arr.append(star * 3)
  
  return arr

print('\n'.join(recursion(n)))