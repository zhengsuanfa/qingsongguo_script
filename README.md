---

# 🧠 qingsongguo\_script — 青松过平台快捷键答题脚本

一个专为 **青松过网站** 定制的油猴脚本，支持使用键盘快捷键快速选择选项和切换题目，提升答题效率，让你轻松应对每一道题。

> ⚠️ 本脚本仅在 **Safari 浏览器 + Tampermonkey 插件** 下测试通过，其他平台可能存在兼容性问题，请自行评估风险。

---

## ✨ 功能说明

* **选项快捷键：**

  * `J` → 选择 A
  * `K` → 选择 B
  * `L` → 选择 C
  * `；`（分号）→ 选择 D

* **题目切换快捷键：**

  * `H` → 上一题
  * `空格键` → 下一题

---

## 🔧 使用方式

1. 安装浏览器插件 [Tampermonkey](https://www.tampermonkey.net/)
2. 打开脚本链接：[点击安装脚本](https://github.com/你的用户名/qingsongguo_script/raw/main/shortcut-answer.user.js)
3. Tampermonkey 会自动识别并提示安装，点击“安装”即可开始使用

---

## ✅ 适配说明

该脚本仅适用于 **青松过平台**，并依赖其特定的 HTML 结构：

#### 示例选项结构：

```html
<div class="optionItem">
  <div class="radio">A</div>
  <div class="spTitle">／etc／hostname</div>
</div>
```

#### 示例切题按钮结构：

```html
<div class="tFCard">上一题</div>
<div class="tFCard">下一题</div>
```

---

## 🧪 测试环境

* 浏览器：Safari
* 插件：Tampermonkey
* 平台：青松过（仅测试该平台，其他平台不保证兼容）

---
