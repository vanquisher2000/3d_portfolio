import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>自己紹介</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px]"
      >
        私は情熱を持って仕事に取り組むアプリ開発者です。
        技術と創造性を融合させ、ユーザーのニーズに応えるソリューションを提供することを常に心がけています。
        新しい技術やトレンドに常に敏感であり、素早く適応し、最新のベストプラクティスを取り入れることに努めています。
        <br />
        <br />
        <br />
        <h3 style={{ fontSize: 24, fontWeight: "bold" }}>自己PR:</h3>
        <br />
        <p style={{}}>
          <strong>常に改善を心掛けて設計:</strong>
          <br />
          プログラマーとして、システム構築のためのプログラミングを担当してきましたが、仕様設計の段階で顧客との打ち合わせにも同席し、導入システムについての説明を行いました。
          プログラミング担当者として直接ヒアリングを行い、システム構築の方向性を顧客と折衝することで、設計フェーズを円滑に進めることができました。
          また、初期段階で詳しいイメージを伝えることによって、導入後の顧客満足度の向上に貢献しました。
          <br />
          <br />
          <strong>スピード:</strong>
          <br />
          常に仕事の速さを意識し、作業の効率化に努めています。
          プロジェクトの初期段階で必要な条件を細かく整理し、作業中に迷いやトラブルが生じないよう徹底しています。
          その結果、1カ月を予定していた開発プロジェクトを2週間で仕上げたこともあります。
          <br />
          <br />
          <strong>正確性:</strong>
          <br />
          ミスが許されないという強い責任感を持ち、作業のすべてにチェックリストを利用しています。
          ダブルチェックを徹底した結果、前職に従事した2年間、数字のミスをしたことは一度もありません。
          この正確性は貴社の業務でも活かせると考えています。
          <br />
          <br />
          <strong>円滑にプロジェクトを進行させるマネジメント力:</strong>
          <br></br>
          自社のプロジェクトメンバーだけでなく顧客先の関係者なども含めて、約3名～4名規模のプロジェクトを進めた経験があります。
          関係者が多くなるためスケジュールの遅延や認識齟齬が発生しないように、定期的に打ち合わせの機会を設けて進捗を管理しました。
          メンバーと顧客先の間に立ち、仕様や価格についても細かく調整し管理することで、大規模なプロジェクトも当初のスケジュールどおりに進めることができ、期日に遅れずに納品することができました。
          <br />
          <br />
          <strong>ビジョン:</strong>
          <br></br>
          私のビジョンは、技術の力を使って人々の生活をより良くすることです。
          ユーザー中心のアプローチを取り、使いやすく、楽しく、有益なアプリケーションを提供することで、世界中の人々に価値を提供したいと考えています。
          <br />
          <br />
          <strong>チームワークとコミュニケーション:</strong>
          <br></br>
          チームプレイヤーとして、他のメンバーとの協力やアイデアの共有を重視しています。
          コミュニケーション能力に優れ、プロジェクトの進行状況や課題を効果的に伝え、解決策を見つけることができます。
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
