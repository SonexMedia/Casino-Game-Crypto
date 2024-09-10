import React from 'react'
import { Col, Row } from 'react-bootstrap'

function BlackjackRu(){
    return <Row>
        <Col lg={2} />
        <Col lg={8}>
            <Row>
                <Col sm={12}><h3>Введение</h3></Col>
                <Col sm={12}>
                    <p>Блэкджек - популярная карточная игра, которая играется в казино, где целью является иметь сумму карт в руке, ближе к 21, чем у дилера, но не превышающую 21.</p>
                    <p>Игра играется одной или несколькими стандартными колодами из 52 карт.</p>
                </Col>
                <Col sm={12}><h3>Значения карт</h3></Col>
                <Col sm={12}>
                    <p>В блэкджеке, нумерованные карты (2-10) стоят столько же, сколько их номинал.</p>
                    <p>Карты с лицами (Король, Дама и Валет) стоят 10.</p>
                    <p>Туз может быть посчитан как 1 или 11, в зависимости от того, какое значение наиболее выгодно для руки.</p>
                </Col>
                <Col sm={12}><h3>Игровой процесс</h3></Col>
                <Col sm={12}>
                    <p>Игра начинается с того, что каждый игрок делает свои ставки на отведенной для этого области перед ними на игровом столе блэкджека.</p>
                    <p>Затем дилер раздает по две карты лицом вверх каждому игроку и одну карту лицом вверх самому себе. Вторая карта дилера раздается лицом вниз (скрытая карта).</p>
                </Col>
                <Col sm={12}><h3>Варианты игрока</h3></Col>
                <Col sm={12}>
                    <p>Ход игрока приходит первым, и у него есть несколько вариантов на выбор, в зависимости от его руки:</p>
                    <ul>
                        <li>Взять: Игрок просит раздать дополнительную карту. Игрок может просить дополнительные карты, пока он не будет удовлетворен своей рукой или пока не превысит 21, что приводит к проигрышу.</li>
                        <li>Остановиться: Игрок решает сохранить свою текущую руку и закончить свой ход, передав действие следующему игроку или дилеру.</li>
                        <li>Удвоить ставку: Игрок удваивает свою исходную ставку и получает только одну дополнительную карту. Этот вариант обычно доступен, когда исходная рука игрока составляет 9, 10 или 11.</li>
                    </ul>
                </Col>
                <Col sm={12}><h3>Ход дилера</h3></Col>
                <Col sm={12}>
                    <p>После того, как все игроки завершили свои ходы, дилер открывает свою скрытую карту.</p>
                    <p>Если сумма карт в руке дилера составляет 16 или менее, он должен взять дополнительные карты и продолжать брать карты, пока сумма его карт не составит 17 или больше.</p>
                    <p>Если сумма карт в руке дилера превышает 21, выигрывают все оставшиеся игроки.</p>
                    <p>Если сумма карт в руке дилера не превышает 21, его рука сравнивается с рукой каждого игрока для определения победителей.</p>
                </Col>
                <Col sm={12}><h3>Блэкджек</h3></Col>
                <Col sm={12}>
                    <p>Если игроку или дилеру выпадают Туз и карта с достоинством 10 (10, Валет, Дама или Король) в качестве их первых двух карт, это называется блэкджеком.</p>
                    <p>Блэкджек - это автоматическая победа для игрока, выплачивающая 3:2, если только у дилера нет блэкджека, что приводит к ничьей.</p>
                </Col>
                <Col sm={12}><h3>Определение результата</h3></Col>
                <Col sm={12}>
                    <p>Если сумма карт в руке игрока выше, чем у дилера, но не превышает 21, игрок побеждает и получает выплату 1:1.</p>
                    <p>Если сумма карт в руке игрока меньше, чем у дилера, игрок проигрывает свою ставку.</p>
                    <p>Если сумма карт в руке игрока и руке дилера одинакова (ничья), ставка возвращается игроку.</p>
                </Col>
            </Row>
        </Col>
        <Col lg={2} />
    </Row>
}

export default BlackjackRu