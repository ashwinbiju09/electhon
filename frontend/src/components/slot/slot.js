import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { TimePicker } from "react-ios-time-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeSlot = () => {
  const [bookings, setBookings] = useState([5, 10, 8, 2, 3]); // array of remaining bookings for each time slot
  const [selectedTime, setSelectedTime] = useState(null); // currently selected time slot
  const [selectedDate, setSelectedDate] = useState(null); // currently selected date

  const handleBooking = (index) => {
    if (bookings[index] > 0) {
      // check if there are still remaining bookings
      setBookings((prevBookings) => {
        const newBookings = [...prevBookings];
        newBookings[index] -= 1; // decrement the remaining bookings for the selected time slot
        return newBookings;
      });
      setSelectedTime(index); // select the clicked time slot
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const [value, setValue] = useState("10:00");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };
  return (
    <div>
      <Navbar />
      <div
        class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{ "padding-top": "20px" }}
      >
        <div class="max-w-md w-full space-y-8">
          <div class="mb-10">
            {/* <div class="flex justify-center">
              <img alt="" class="h-14 w-14" src="/assets/logo.png" />
            </div> */}
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Your Allocated Polling Booth : Coimbatore
            </h2>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-1/2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  dateFormat="yyyy-MM-dd HH:mm"
                  minDate={new Date()}
                  placeholderText="Select date and time"
                  className="p-4 rounded-lg cursor-pointer border-gray-300"
                />
              </div>
              <br></br>
              <br></br>

              {bookings.map((booking, index) => (
                <div
                  key={index}
                  className={`w-full md:w-1/2 p-4 rounded-lg cursor-pointer border ${
                    selectedTime === index
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleBooking(index)}
                >
                  <h2 className="text-lg font-bold mb-2">{`Slot ${
                    index + 1
                  }`}</h2>
                  <p className="text-gray-500">{`${booking} bookings left`}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <TimePicker onChange={onChange} value={value} />
          </div> */}
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
          >
            Book Slot
          </button>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default TimeSlot;
