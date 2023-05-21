"use client"
import { Text,Button, Grid  } from "@nextui-org/react";
import Image from "next/image";
import css from '../page.module.css'
import styles from './detail.css';
import suit from '../images/janken.png';


export default function gamesDetail(){
    return (
        <>
        <div className={css.heroImage}>
            <div className="latar">
                <div className="container">
                    <div className="detail-page">
                    <h1 className="tulis-tengah text-light">Game Detail</h1>
                        <div className="game-card rounded-5 p-3 m-3">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <Image src={ suit } height={300} width={300} className="img-fluid d-block mx-auto rounded-5"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                    <Text h2 size={60}css={{textGradient: "45deg, $yellow600 -20%, $red600 100%",}}weight="bold"
                                        >Rock Paper Scissors
                                        </Text>
                                        <p className="card-text text-light">
                                        What is the concept of Rock Paper Scissors? Each gesture
                                        defeats one and is defeated by one of the other two: rock
                                        defeats scissors but is defeated by paper; paper defeats
                                        rock but is defeated by scissors. The person whose gesture
                                        defeats the other is selected.
                                        </p>
                                        <div className="game-game-bottom">
                                        <div className="leaderboard w-50 p-2">
                                            <h5 className="card-text">Top 3 LeaderBoard</h5>
                                            <table className="table table-hover table-primary">
                                            <thead>
                                                <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Score</th>
                                                </tr>
                                            </thead>
                                            </table>
                                        </div>
                                        <Button css={{ mb: "$10" }} shadow bordered color="gradient" auto onClick={() => navigate.push("#")}
                                        >Play Now!
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}