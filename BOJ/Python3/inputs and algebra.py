#BOJ 10718 We love kriii
print("강한친구 대한육군"*2)

#BOJ 10171 Cats
print("\    /\\")
print(" )  ( ')")
print("(  /  )")
print(" \(__)|")

#BOJ 10172  Dogs
print("|\_/|")
print("|q p|   /}")
print("( 0 )\"\"\"\\")
print("|\"^\"`    |")
print("||_/=\\\__|")

#BOJ 1000 A+B
a,b=map(int, input().split())
print(a+b)

#BOJ 1001 A-B
a,b=map(int, input().split())
print(a-b)

#BOJ 10998 A*B
a,b=map(int, input().split())
print(a*b)

#BOJ 1008 A/B
a,b=map(int, input().split())
print(a/b)

#BOJ 10869 사칙연산
a,b=map(int, input().split())
print(a+b)
print(a-b)
print(a*b)
print(a//b)
print(a%b)

#BOJ 10430 나머지
a,b,c=map(int, input().split())
print((a+b)%c, ((a%c)+(b%c))%c, (a*b)%c, ((a%c)*(b%c))%c, sep='\n')

#BOJ 2588 곱셈
a=int(input())
b=input()

third= int(b[2])*a
fourth= int(b[1])*a
fifth= int(b[0])*a
sixth= int(b)*a

print(third, fourth, fifth, sixth, sep='\n')