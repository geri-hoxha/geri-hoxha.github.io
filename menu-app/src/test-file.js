const data = [
    {
        category: 'breakfast',
        list: [
            {
                title: '',
                desription: '',
                image: '',
                price: '',
            },
            {
                title: '',
                desription: '',
                image: '',
                price: '',
            }
        ]
    },
    {
        category: 'lunch'
    }
]

data.map((el, index) => {
    data.el.list.map()
    return (
    <div onClick={clickHandler}>{el.category}</div>
    )
})

const clickHandler = (category) => {
    data.map(el => {
        if(el.category === category) {
            el.list.map(item => {
                return (
                    <div></div>
                )
            })   
        }
    })
}