const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookedTimeSlots : {
          from : {type : String} ,
          to : {type : String}
      } ,
      totalHours : {type : Number},
      totalAmount : {type : Number},
      transactionId : {type : String},
      driverRequired : {type : Boolean}


},
  {timestamps : true}
)

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel