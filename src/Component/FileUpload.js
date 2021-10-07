import React, { useEffect, useState } from 'react'

export const FileUpload = () => {

    const [farms, setfarms] = useState([])
    const [fields, setfields] = useState([])
    const [years, setYears] = useState([])
    useEffect(()=>{
        const getFarms = async () => {
            const farmsFromSever = await fetchFarms()
            setfarms(farmsFromSever)
        }
        getFarms()

        const getFields = async () => {
            const fieldsFromSever = await fetchFields()
            setfields(fieldsFromSever)
        }
        getFields()

        const yearsData = []
        for (let i = 1980; i < 2022; i++) {
            yearsData.push(i)
        }
        setYears(yearsData)
    })

    const fetchFarms = async() =>{
        const res = await fetch('http://localhost:5000/farms')
        const data = await res.json()
        return data
    }
    
    const fetchFields = async() =>{
        const res = await fetch('http://localhost:5000/fields')
        const data = await res.json()
        return data
    }

    return (
        <div>
                <div class="container">


                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col-8">
                            <form>


                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Farm</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        {
                                            // <option>{JSON.stringify(farms,null,2)}</option>
                                            farms.map((farm)=>(
                                                <option value={farm.id}>{farm.name}</option>
                                            ))
                                        }                                   
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Year</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        {
                                            // <option>{JSON.stringify(farms,null,2)}</option>
                                            years.map((year)=>(
                                                <option value={year}>{year}</option>
                                            ))
                                        }   
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect2">Field</label>
                                    <select class="form-control" id="exampleFormControlSelect2">
                                    {
                                            // <option>{JSON.stringify(farms,null,2)}</option>
                                            fields.map((field)=>(
                                                <option value={field.id}>{field.name}</option>
                                            ))
                                        }   
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">DataSource</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter DataSource" />
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Select file</label>
                                    <br />
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                            </form>
                        </div>
                        <div class="col">

                        </div>
                    </div>

                </div>
            </div>
    )
}
