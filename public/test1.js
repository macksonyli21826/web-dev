const C = () => {
    const [i, j] = useState(false)
    return(<div>
        {  i && <span onClick={() => j(false)}>K</span>}
        { !i && <span onClick={() => j(true) }>L</span>}
    </div>)}