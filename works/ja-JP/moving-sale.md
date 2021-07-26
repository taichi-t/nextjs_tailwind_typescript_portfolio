---
title: "Moving Sale"
date: "2020-10-18"
tags:
  - reactHook
  - nextJs
  - mongoDB
  - nodeJs
  - semantic-ui

role:
  - フロントエンド開発
  - バックエンド開発
webLink: "https://moving-sale.vercel.app/"
githubLink: "https://github.com/taichi-t/next.js_e-commerce"
image:
  src: "/images/websites/moving-sale/moving-sale-devices.png"
  alt: "moving-saleのレスポンシブ画像"
thumbnail:
  src: "/images/websites/moving-sale/moving-sale-mockup.png"
  alt: "moving-saleのモックアップ画像"
links:
  next:
    src: "/work/impactraction"
    title: "Company's websites"
  prev:
    src: "/work/my-work-space"
    title: "My Work Place"
---

## Moving Sale とは？

ユーザ間で物の取引をするプラットフォームです 👀

![Screenshot](/images/websites/moving-sale/screenshot.png)

## 特徴

- ユーザー認証
- 招待制
- 商品に対してコメントができる機能
- 商品をお気に入り登録できる機能
- SNS を通じで販売者に連絡できる機能

## 設計

![設計](/images/websites/moving-sale/architecture.png)

## 技術

- リクエスト毎に session ID を DB に検証をするのを避ける目的で、JWT を導入しました
- クリティカルレンダリングパスを最適化する為 SSG を導入しました
