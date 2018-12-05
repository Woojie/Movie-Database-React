import React from 'react'
import { Segment} from "semantic-ui-react";

const DollarSign = (props) => {
  let revenue;
  let budget;
  if(props.revenue === undefined){
    revenue = ''
    budget =''

  }else{
  revenue = props.revenue.toString()
  budget = props.budget.toString()
  let newRevenue,
  newBudget

switch(revenue.length){
  case 7:newRevenue = `$${revenue[0]}million`
  break 
  case 8:newRevenue =`$${revenue[0]+revenue[1]}million`
  break
  case  9:newRevenue = `$${revenue[0]+revenue[1]+revenue[2]}million`
  break
  case  10:newRevenue = `$${revenue[0]}.${revenue[1]+revenue[2]}billion`
  break
  default: newRevenue = revenue
}

switch(budget.length){
  case 7:newBudget = `$${budget[0]}million`
  break
  case 8:newBudget =`$${budget[0]+budget[1]}million`
  break
  case  9:newBudget = `$${budget[0]+budget[1]+budget[2]}million`
  break
  case  10:newBudget = `$${budget[0]}.${budget[1]+budget[2]}billion`
  break
  default: newBudget =budget
}
revenue = newRevenue
budget = newBudget
}

let noMargins = {
  margin: '0'
}

return (
  <div>
  <p style={noMargins}><b>Budget:</b> {budget}</p>
  <p style={noMargins}><b>Revenue:</b> {revenue}</p>
  </div>
)
}

export default DollarSign