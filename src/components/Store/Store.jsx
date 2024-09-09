import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import { useState } from 'react';
import './Store.css';


export default function Store(props) {
    // const projectsList = props.data;
    const views = ["view_list", "view_module"];
    const [view, setSwitch] = useState(views[0]);
    const Switch = (event) => {
        const viewSelected = (event.target.textContent === views[0] ? views[1] : views[0]);
        setSwitch(viewSelected);
        // selected === "All" ? setProjectList(projectsList) : setProjectList(projectsList.filter((item) => item.category === selected));
    };

    return (
        <div className="main-content">
            <IconSwitch icon={view} onSwitch={Switch}/>
            {view === views[0] ? <CardsView cards={props.products} /> : <ListView items={props.products} />}
        </div>
    );

}
