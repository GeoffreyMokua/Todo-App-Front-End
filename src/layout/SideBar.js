import { useContext } from "react";
import {
    OptionContextUpdate,
    endPointContextUpdate,
} from "../services/OptionProvider.js";
import '../css/App.css'


export default function SideBar() {

    const setNewOption = useContext(OptionContextUpdate);
    const setNewEndPoint = useContext(endPointContextUpdate);

    const itemList = [
        {
            optionName: "All Tasks",
            icon: "fa-tasks",
            link: "#",
            endPoint: "/todo/all",
        },
        {
            optionName: "In Progress",
            icon: "fa-spinner",
            link: "#",
            endPoint: "/todo/progress",
        },
        {
            optionName: "Completed",
            icon: "fa-check-double",
            link: "#",
            endPoint: "/todo/completed",
        },
        {
            optionName: "Today",
            icon: "fa-calendar-day",
            link: "#",
            endPoint: "/todo/today",
        },
        {
            optionName: "Week",
            icon: "fa-calendar-week",
            link: "#",
            endPoint: "/todo/week",
        },
        {
            optionName: "Month",
            icon: "fa-calendar-alt",
            link: "#",
            endPoint: "/todo/month",
        },
    ];
    return (
        <div className="app-sidebar bg-pri col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 px-0 py-2">
            <div className="list-group list-group-flush">
                {itemList.map((item, index) => {
                    const { optionName, icon, link, endPoint } = item;
                    return (
                        <a
                            aria-label={optionName}
                            className="list-group-item list-group-item text-success list-group-item-light px-3 my-2"
                            key={index}
                            href={link}
                            onClick={(e) => {
                                e.stopPropagation();
                                setNewOption(optionName);
                                setNewEndPoint(endPoint);
                            }}
                        >
                            <i className={`fas ${icon}`}>&nbsp; &nbsp;</i>
                            {optionName}
                        </a>
                    );
                })}


            </div>
        </div>
    );
}
