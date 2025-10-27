async function Testing()
        {
            let a = await fetch("/", {method: "POST"})
            let b = await a.text();
            console.log(b);
        }
        async function Testing()
        {
            let a = await fetch("/", {method: "PUT"})
            let b = await a.text();
            console.log(b);
        }
        // async function Testing()
        // {
        //     let a = await fetch("/", {method: "DELETE"})
        //     let b = await a.text();
        //     console.log(b);
        // }
        Testing();