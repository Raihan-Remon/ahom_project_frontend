import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import {URL} from "../../components/constants"

const Blocks = () => {
    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        const getHash = async () => {
            await fetch(URL + "hashes")
                .then(res => res.json())
                .then(data => {
                    console.log(data.hashes)
                    setBlocks(data.hashes);
                })
        }
        getHash()
    }, [setBlocks]);
    return (
        <div>
            <Sidebar/>
            <section className="home">
                <div className="text">Send</div>
                <div className="p-5">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Hash</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blocks !== [] ?
                            blocks.map((data,index) =>
                                <tr key={index}>
                                    <th scope="row">{index +1}</th>
                                    <th scope="row">{data}</th>
                                </tr>) : ""
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Blocks;