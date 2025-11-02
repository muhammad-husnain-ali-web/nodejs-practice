import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    IsManager : Boolean
});

export const Employee = mongoose.model("Employee", EmployeeSchema)