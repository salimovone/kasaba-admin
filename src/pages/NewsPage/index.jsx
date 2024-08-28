import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            navigate("/");
        }
    }, [location.state, navigate]);

    return (
    <div className="w-full pt-8 pr-4 overflow-y-auto hfull max-h-screen">
        <div
            className={`w-full h-52 bg-cover bg-center rounded-2xl`}
            style={{ backgroundImage: `url(${location.state.image})` }}
        ></div>

        <div className="">
            <h1 className="mt-6 mb-2 uppercase font-bold text-3xl text-slate-900">{location.state.title}</h1>
            <p className="text-slate-700">{location.state.text}</p>
        </div>
    </div>
    );
};

export default NewsPage;
