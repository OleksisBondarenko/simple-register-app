import style from "./index.module.css";

import UsersCard from "components/01-molecules/02-UsersCard";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";

import Preloader from "components/00-atoms/00-meta/Preloader";
import { useEffect, useState } from "react";

const ScreenUsers = (props) => {
    const {} = props;

    const [page, setPages] = useState(1);
    const [count, setCount] = useState(6);
    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                    setUsers(data.users);
                    setIsLoading(false);
                } else {
                    setIsError(true);
                }
            });
    }, []);

    

    return (
        <>
            {isLoading ? (
                <Preloader></Preloader>
            ) : (
                <div className={style["employes"]}>
                    <h1 className={style["header"]}>
                        Working with GET request
                    </h1>

                    <div className={style["cards"]}>
                        <UsersCard users={users}></UsersCard>
                    </div>

                    <div className={style["show-more"]}>
                        <ButtonPrimary >
                            Show more
                        </ButtonPrimary>
                    </div>
                </div>
            )}
        </>
    );
};
export default ScreenUsers;
