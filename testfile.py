#pythonda kolkulator yasashga qaror qildim
import math


def sorter(a):
    yang_list = []
    while a:
        eng_kich = a[0]
        for i in a:
            if i>eng_kich:
                eng_kich=i
        yang_list.append(eng_kich)
        a.remove(eng_kich)
    return(yang_list)



def ekub_light(son1, son2):
    sonlar = []
    if son1 > son2:
        sonlar.append(son1)
        sonlar.append(son2)
        # print(sonlar)
    else:
        sonlar.append(son2)
        sonlar.append(son1)
        # print(sonlar)

    if sonlar[0] % sonlar[1] == 0:
        return sonlar[1]

    while sonlar[0] % sonlar[1] != 0:
        qoldiq = sonlar[0] % sonlar[1]
        sonlar[0] = sonlar[1]
        sonlar[1] = qoldiq
    return sonlar[1]


def ekub(son1, son2, *son):
    sonlarim = [son1, son2, *son]
    sonlar_new = []
    while True:
        while len(sonlarim)!=1 and sonlarim:
            ekub_new=ekub_light(sonlarim.pop(0), sonlarim.pop(-1))
            sonlar_new.append(ekub_new)
        if sonlarim:
            sonlar_new.append(sonlarim.pop(0))
        if len(sonlar_new) != 1:
            sonlarim = sonlar_new
        else:
            break
    return sonlar_new[0]

# print(ekub3(10, 50))

def ekub_list(list):
    sonlar_new = []
    while True:
        while len(list) != 1 and list:
            ekub_new = ekub_light(list.pop(0), list.pop(-1))
            sonlar_new.append(ekub_new)
        if list:
            sonlar_new.append(list.pop(0))
        if len(sonlar_new) != 1:
            list = sonlar_new
        else:
            break
    return sonlar_new[0]
# print(ekub_list([120,60, 48, 144]))


def tubmi(son):
    ildiz = math.floor(math.sqrt(son))
    tub = True
    if son == 1:
        tub = False
    elif son ==2:
        tub = True
    elif son == 3:
        tub = True
    else:
        for i in range(2, ildiz+1):
            if son % i == 0:
                tub = False
    return tub


def tubmi2(son):
    tub = True
    if son == 1:
        tub = False
    elif son == 2:
        tub = True
    else:
        for i in range(2, son):
            if son % i ==0:
                tub = False
    return tub



def tubsonchi(son):
    eratosfen_galviri= []
    tub = 1
    while len(eratosfen_galviri) < son:
        if tubmi(tub):
            eratosfen_galviri.append(tub)
            tub +=1
        else:
            tub +=1
    return eratosfen_galviri

# print(tubsonchi(5))

def tub_oraliq(son):
    tub_sonlar = []
    for i in range(2, son+1):
        if tubmi(i):
            tub_sonlar.append(i)
    return tub_sonlar
# print(tub_oraliq(50))

def kanonik(son):
    list = tub_oraliq(son)
    list_index = 0
    natija = []
    if son == 1:
        natija.append(1)
    # print(list[list_index])
    while list:
        if son % list[list_index] == 0:
            son = son/list[list_index]
            # print(s)
            natija.append(list[list_index])

        else:
            del list[list_index]
    return natija


def paskal(son):
    raqam = 2
    if son == 0:
        mylist = [1]
    elif son == 1:
        mylist = [1, 1]
    else:
        mylist = [1, 1]
        while son >= raqam:
            index = 0
            temp = []
            temp.append(1)
            while index <= len(mylist)-2:
                new = mylist[index] + mylist[index + 1]
                temp.append(new)
                index += 1
            temp.append(1)
            mylist = temp
            raqam += 1
    return mylist
