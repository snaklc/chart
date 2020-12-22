import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDatas = [
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale: 14500
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale: 8450
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:45000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4900
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:1500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale: 5600
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:2300
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:1000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:56000
      }
    },
    {
      name: 'Ayşe',
      age: 5,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:5000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:44500
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 70,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 30,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    
    {
      name: 'Jack',
      age: 30,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 40,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 40,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 36,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 37,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 40,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 40,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 76,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 66,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 86,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jack',
      age: 16,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 10,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 8,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 22,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 31,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 24,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 46,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    
    {
      name: 'Jack',
      age: 80,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 15,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 19,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 25,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 100,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 36,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 45,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 43,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 47,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5040
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 16,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 18,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    
    {
      name: 'Jack',
      age: 26,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'B',
      age: 72,
      gender: 'Male',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:5200
      }
    },
    {
      name: 'C',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Iphone',
        model: '10',
        sale:4500
      }
    },
    {
      name: 'Jack',
      age: 10,
      gender: 'Male',
      phone: {
        company: 'Iphone',
        model: '6S',
        sale:12000
      }
    },
    {
      name: 'Jennifer',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'S10',
        sale:8000
      }
    },
    {
      name: 'Ayşe',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Ayşe',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Ayşe',
      age: 70,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Ayşe',
      age: 50,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Ayşe',
      age: 23,
      gender: 'Female',
      phone: {
        company: 'Sonny',
        model: 'Xperia',
        sale:3000
      }
    },
    {
      name: 'Saliha',
      age: 27,
      gender: 'Female',
      phone: {
        company: 'Xiaomi',
        model: 'Red mi 9',
        sale:4000
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
    {
      name: 'Beyza',
      age: 26,
      gender: 'Female',
      phone: {
        company: 'Samsung',
        model: 'Note 10',
        sale:500
      }
    },
   
  ]

}


