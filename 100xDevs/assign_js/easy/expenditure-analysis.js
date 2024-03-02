function calculateTotalSpentByCategory(transactions) {
  const totals={};
  transactions.forEach((transaction) => {
    const {category,price} =transaction;
    if(!totals[category]){
      totals[category] =price;
    }
    else{
      totals[category]+=price;
    }
  });

  const result=[];
  Object.keys(totals).forEach(category=>{
    result.push({
      category:category, totalSpent:totals[category]
    });
    
  })
  return result;
}
console.log(calculateTotalSpentByCategory([{id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza'}]))
