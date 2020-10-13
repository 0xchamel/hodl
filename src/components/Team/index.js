import React from 'react';
import { Modal } from 'antd';

import './Team.scss'

import inImg from '../../assets/img/team/in.svg';
import decor_6 from '../../assets/img/decor/6.svg';
import crossImg from '../../assets/img/team/cross.svg';

const Team = () => {
    const team = [
        {
            name: 'Patrick Poirier',
            position: 'Managing General Partner',
            linkedIn: '/',
            text: 'Managing General Partner of Dragon’s Vault, from a high-school dropout, he later pursued his education and completed 5 degrees in various disciplines such as commerce, computer science, neuroscience, artificial intelligence. During which, he founded 6 businesses in the technology sectors, including Artificial Intelligence and Blockchain. One of his previous companies was nominated in the top 10 competitors in the IBM Watson AI XPRIZE in 2017, and again the top 30 in 2018. He’s been a participant of multiple business accelerators such as the prestigious Creative Destruction Lab in the Blockchain and Artificial Intelligence stream. Additionally, Patrick is an Angel investor with the Singapore-based Angel Central group. He studied for a while Computational Finance and worked at a Hedge Fund that was building sentiment analysis technologies on Twitter data to predict stock market fluctuations. He also served as a technology advisor for new internet-based ventures to the top executives of Rockwell Collins, a Fortune 500 with 34,000 employees.'
        },
        {
            name: 'Sahil Verma',
            position: 'Legal Counsel, COO of Asia & General Partner',
            linkedIn: '/',
            text: 'Managing General Partner of Dragon’s Vault, from a high-school dropout, he later pursued his education and completed 5 degrees in various disciplines such as commerce, computer science, neuroscience, artificial intelligence. During which, he founded 6 businesses in the technology sectors, including Artificial Intelligence and Blockchain. One of his previous companies was nominated in the top 10 competitors in the IBM Watson AI XPRIZE in 2017, and again the top 30 in 2018. He’s been a participant of multiple business accelerators such as the prestigious Creative Destruction Lab in the Blockchain and Artificial Intelligence stream. Additionally, Patrick is an Angel investor with the Singapore-based Angel Central group. He studied for a while Computational Finance and worked at a Hedge Fund that was building sentiment analysis technologies on Twitter data to predict stock market fluctuations. He also served as a technology advisor for new internet-based ventures to the top executives of Rockwell Collins, a Fortune 500 with 34,000 employees.'
        },
        {
            name: 'Mike Sites',
            position: 'COO of Americas & General Partner',
            linkedIn: '/',
            text: 'Managing General Partner of Dragon’s Vault, from a high-school dropout, he later pursued his education and completed 5 degrees in various disciplines such as commerce, computer science, neuroscience, artificial intelligence. During which, he founded 6 businesses in the technology sectors, including Artificial Intelligence and Blockchain. One of his previous companies was nominated in the top 10 competitors in the IBM Watson AI XPRIZE in 2017, and again the top 30 in 2018. He’s been a participant of multiple business accelerators such as the prestigious Creative Destruction Lab in the Blockchain and Artificial Intelligence stream. Additionally, Patrick is an Angel investor with the Singapore-based Angel Central group. He studied for a while Computational Finance and worked at a Hedge Fund that was building sentiment analysis technologies on Twitter data to predict stock market fluctuations. He also served as a technology advisor for new internet-based ventures to the top executives of Rockwell Collins, a Fortune 500 with 34,000 employees.'
        },
        {
            name: 'Christina Nguyen',
            position: 'Venture Associate',
            linkedIn: '/',
            text: 'Managing General Partner of Dragon’s Vault, from a high-school dropout, he later pursued his education and completed 5 degrees in various disciplines such as commerce, computer science, neuroscience, artificial intelligence. During which, he founded 6 businesses in the technology sectors, including Artificial Intelligence and Blockchain. One of his previous companies was nominated in the top 10 competitors in the IBM Watson AI XPRIZE in 2017, and again the top 30 in 2018. He’s been a participant of multiple business accelerators such as the prestigious Creative Destruction Lab in the Blockchain and Artificial Intelligence stream. Additionally, Patrick is an Angel investor with the Singapore-based Angel Central group. He studied for a while Computational Finance and worked at a Hedge Fund that was building sentiment analysis technologies on Twitter data to predict stock market fluctuations. He also served as a technology advisor for new internet-based ventures to the top executives of Rockwell Collins, a Fortune 500 with 34,000 employees.'
        },
    ]


    const [isModalOpen, setModalOpen] = React.useState(false)
    const [activePerson, setActivePerson] = React.useState({ ...team[0], img: 1 })

    const handleOk = () => {
        setModalOpen(false)
    }

    const handleOpen = (person) => {
        setActivePerson(person)
        setModalOpen(true)
    }

    return (
        <>
            <div className="team">
                <div className="row team__row">
                    <h2 className="team__title h2 h2--decor h2--decor-light">Team</h2>
                    <div className="team__box">
                        {
                            team.map((person, index) => {
                                return <div key={index} className="team__card">
                                    <div className="team__card-wrapper" onClick={() => handleOpen({ ...person, img: index + 1 })}>
                                        <div className="team__card-img">
                                            <div className="team__card-img-shadow"></div>
                                            <img src={require(`../../assets/img/team/${index + 1}.jpg`)} alt="" />
                                        </div>
                                        <div className="team__card-name">{person.name}</div>
                                        <div className="team__card-position">{person.position}</div>
                                        <a href={person.linkedIn} className="team__card-link">
                                            <img src={inImg} alt="" />
                                            <span>LinkedIn Profile</span>
                                        </a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal
                visible={isModalOpen}
                footer={false}
                onOk={handleOk}
                onCancel={handleOk}
                closeIcon={<img src={crossImg} />}
            >
                <div className="team__modal">
                    <div className="team__modal-head">
                        <img src={require(`../../assets/img/team/${activePerson.img}.jpg`)} alt="" />
                        <div className="team__modal-wrapper">
                            <div className="team__modal-name">{activePerson.name}</div>
                            <a href={activePerson.linkedIn} className="team__card-link">
                                <img src={inImg} alt="" />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                    <p>{activePerson.text}</p>
                    <img src={decor_6} alt="" />
                </div>
            </Modal>
        </>
    );
}

export default Team;
