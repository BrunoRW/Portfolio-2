import Wave from "./wave"

export default function FirstP(): JSX.Element{

    return( 
        <div className="container-fp">
            <div className="container-in-fp">

                <h1 className="name-fp">Bruno Wotzke</h1>
                {/* decoration */}
                
                <div className="ball-fp"></div>
                <div className="ball-fp"></div>
                <div className="ball-fp"></div>

                {/* decoration  */}
                <div className="line-fp">
                    <div className="line-fp-in"></div>
                </div>
            </div>
            
            {/* <button className="discover-fp">Veja mais</button>  */}

            <Wave/>
        </div>
    )
}