---
title: "Authenticator"
date: "2021-07-25"
tags:
  - typeScript
  - reactHook
  - materialUi
  - emotion
  - mongoDB
  - redux
  - express
role:
  - Front-end development
  - Back-end development
webLink: "https://authenticator-neon.vercel.app/"
githubLink: "https://github.com/taichi-t/authenticator/"
image:
  src: "/images/websites/authenticator/authenticator-mockup.png"
  alt: "authenticator mockup"
thumbnail:
  src: "/images/websites/authenticator/authenticator-thumbnail.png"
  alt: "authenticator thumbnail"
links:
  next:
    src: "/work/moving-sale"
    title: "Moving Sale"
  prev:
    src: "/work/portfolio"
    title: "Portfolio"
---

## Authenticator とは？

TypeScript で作られた、フルスタック認証アプリです

## なぜ作ったか？

認証のフローがどのような流れなのか理解する為です。認証機能はほとんどのアプリケーションにある機能です。なので実務でも個人開発でも実装する事になるので認証のフローを一通り理解しておきたかったのが理由です

## 認証フロー

![認証フロー](/images/websites/authenticator/OAuth-flow.png)

## 設計

![設計](/images/websites/authenticator/architecture.png)

## リンク

- プロダクション (https://authenticator-neon.vercel.app/)
- ステイジング (https://authenticator-neon-staging.vercel.app/)

注意: クロスサイトトラッキングを有効しないと機能しません。

## 実装予定機能

- JWT での認証
- 他の認証プロバイダーの追加（Facebook, Instagram）
