
export default () => ({
    isLoading: true,
    entries: [
            {
                id:new Date().getTime(),
                date: new Date().toDateString(),
                text: "Nostrud minim fugiat proident amet esse commodo irure consectetur anim minim minim occaecat cupidatat." 
            },
            {
                id:new Date().getTime() +1000,
                date: new Date().toDateString(),
                text: "Nostrud minim fugiat proident amet esse commodo irure consectetur anim minim minim occaecat cupidatat." 
            },
            {
                id:new Date().getTime()+2000,
                date: new Date().toDateString(),
                text: "Nostrud minim fugiat proident amet esse commodo irure consectetur anim minim minim occaecat cupidatat." 
            },
            {
                id:new Date().getTime()+500,
                date: new Date().toDateString(),
                text: "Nostrud minim fugiat proident amet esse commodo irure consectetur anim minim minim occaecat cupidatat." 
            },
        ]
})