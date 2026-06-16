
////////////////////////////////////
// Challenge #1: createUsernames
////////////////////////////////////

/*
შექმენი ფუნქცია 'createUsernames', რომელიც:

1. პარამეტრად იღებს accounts მასივს
2. forEach-ით გაივლის თითოეულ ანგარიშს
3. ყოველ ანგარიშს დაუმატებს ახალ property-ს 'username'
4. username შედგება owner-ის სახელის ინიციალებისგან, lowercase-ში

მაგალითი:
  'Jonas Schmedtmann' → 'js'
  'Steven Thomas Williams' → 'stw'

HINT: გამოიყენე toLowerCase(), split(' '), map(), join('')
HINT: ფუნქცია არაფერს აბრუნებს (return არ სჭირდება) —
      მხოლოდ ობიექტებს უმატებს username-ს (side effect)

ფუნქციის შექმნის შემდეგ დაუძახე: createUsernames(accounts);
შემდეგ დალოგე accounts და შეამოწმე username-ები.
*/

// შენი კოდი აქ:

/////////////////////////////////////////////////////////
////////////////////////////////////
// Challenge #3: calcDisplayBalance
////////////////////////////////////

/*
შექმენი ფუნქცია 'calcDisplayBalance', რომელიც:

1. პარამეტრად იღებს account ობიექტს (acc)
2. reduce-ით ჯამავს acc.movements მასივის ყველა ელემენტს
3. შედეგს ინახავს acc.balance-ში (ობიექტზე ამატებს ახალ property-ს)
4. labelBalance.textContent-ს ანიჭებს: '${balance}€'

HINT: reduce((acc, mov) => acc + mov, 0)
HINT: acc.balance = ... — ობიექტზე ახალი property-ის დამატება

ტესტი: calcDisplayBalance(account1);
→ უნდა აჩვენოს: 3840€
*/

// შენი კოდი აქ:
////////////////////////////////////


// Challenge #7: Transfer (Event Handler)
////////////////////////////////////

/*
btnTransfer-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault()
2. inputTransferAmount.value-დან ამოიღე თანხა (Number-ად გადააქციე)
3. accounts-ში იპოვე მიმღები ანგარიში inputTransferTo.value-ით (find())
4. გაასუფთავე input ველები
5. შეამოწმე 4 პირობა (ყველა ერთად):
   - amount > 0
   - მიმღები ანგარიში არსებობს (receiverAcc)
   - currentAccount.balance >= amount (საკმარისი თანხა)
   - მიმღები არ არის საკუთარი თავი (receiverAcc.username !== currentAccount.username)
6. თუ ყველაფერი OK:
   - currentAccount.movements-ში push(-amount) (გამგზავნს აკლდება)
   - receiverAcc.movements-ში push(amount) (მიმღებს ემატება)
   - updateUI(currentAccount)

ტესტი: გადარიცხე 100€ 'jd'-ზე (Jessica Davis)
*/

// შენი კოდი აქ: