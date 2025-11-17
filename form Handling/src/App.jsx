import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
      register,
      handleSubmit,
      // setError,
      formState: { errors, isSubmitting },
    } = useForm();

    // const delay = (d) =>{
    //   return new Promise((res, rej)=>{
    //     setTimeout(() => {
    //       res()
    //     }, d*1000);
    //   })
    // }

    // const onSubmit = (data) => {
    //   console.log(data)
    // }

    // const onSubmit = async (data) => {
    //   await delay(2)
    //   console.log(data)
      
    //   if(data.username == "rohan")
    //   {
    //     setError("blocked", {message:"sorry you are bocked"})
    //   }
    //   else if(data.username != "harry")
    //   {
    //     console.log(data.username)
    //     setError("myform", {message:"your form is not in good order because credential is invaild"})
    //   }
    // }

    const onSubmit = async (data) => {
      let r = await fetch("http://localhost:3000/", {method: "POST",headers:{
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)})
      let res = await r.text();
      console.log(data)
      console.log(res)
    }

  return (
    <>
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("username")} type="text" placeholder='username' /> */}
        {/* <input {...register("username", {required:true, minLength:4, maxLength:8})} type="text" placeholder='username' />
        {errors.username && <div>"there is some error"</div>} */}
        {/* <br /> */}

        {/* <input {...register("password")} type="password" placeholder='password'/>
        <br /> */}

        <input {...register("username", {required:{value:true, message:"This feild is required"}, maxLength:{value:8, message:"maxLength is 8"},minLength:{value:4, message:"minLength is 3"}})} type="text" placeholder='username' />
        {errors.username && <div className='red'>{errors.username.message}</div>}

        <input {...register("password", {minLength:{value:7, message:"minLentg is 7"}})} type="password" placeholder='password'/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <br />

        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        {isSubmitting && <div>Loading...</div>}
      </form>
    </div>
    </>
  )
}

export default App
