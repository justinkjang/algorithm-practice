#BOJ 2798 JACK



def groupTransactions(transactions):
    uniqueItems = list(set(transactions))

  
    for i in range(len(uniqueItems)):
        uniqueItems.append(transactions.count(uniqueItems[i]))
    


transactions_count = int(input().strip())

transactions = []

for _ in range(transactions_count):
    transactions_item = input()
    transactions.append(transactions_item)

groupTransactions(transactions)