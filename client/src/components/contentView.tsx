import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Main from './main';




export default function ContentView() {




    return (
        
        <div id={"contentView"}>
            <Switch>
              {/*   <Route exact path={"/"} component={Main} />  */}     {/* trying to add dynamic region to url */}                    
                <Route path={"/cart"} component={Cart} />
            </Switch>                
        </div>
     
    )
}

