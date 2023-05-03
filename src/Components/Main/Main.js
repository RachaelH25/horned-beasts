// import { useState } from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";
import data from "../../data.json";

export default function Main() {
    // const [votes, setVotes] = useState(#);
    const beasts = data.map((item) => {
        return <HornedBeast id={item.id} title={item.title} imgURL={item.image_url} description={item.description} />;
    });
    return <main>{beasts}</main>;
}

// function Main() {
//     const smaugImg =
//         "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2d28c44-1942-435b-965f-8801cd5f6a19/d810lro-41ac2193-472b-4086-bba0-9754c2e6d722.jpg/v1/fill/w_1280,h_1098,q_75,strp/smaug_digital_painting_by_ram_by_robertmarzullo_d810lro-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5OCIsInBhdGgiOiJcL2ZcL2UyZDI4YzQ0LTE5NDItNDM1Yi05NjVmLTg4MDFjZDVmNmExOVwvZDgxMGxyby00MWFjMjE5My00NzJiLTQwODYtYmJhMC05NzU0YzJlNmQ3MjIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9Ry9p-RkzSz5GTpl1XiL9z2ZAFKE7DKBgmW0t1aioHI";
//     const uniwhalIMG =
//         "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
//     const rhinoIMG =
//         "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
//     return (
//         <main>
//             <HornedBeast title="Smaug" imgURL={smaugImg} description="dragon" />
//             <HornedBeast title="UniWhal" imgURL={uniwhalIMG} description="A unicorn and narwhal nuzzling horns." />
//             <HornedBeast title="Rhinos" imgURL={rhinoIMG} description="Rhino Family" />
//         </main>
//     );
// }

// export default Main;
