// ==UserScript==
// @name         青松过答题快捷键
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  使用 JKL；选择ABCD选项 空格H 快捷键答题
// @author       zhengsuanfa
// @match        *://www.qingsongguo.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const keyMap = {
        'J': 'A',
        'K': 'B',
        'L': 'C',
        ';': 'D'
    };

    document.addEventListener('keydown', function (e) {
        const key = e.key.toUpperCase();

        // 选项选择
        if (keyMap.hasOwnProperty(e.key.toUpperCase())) {
            const optionLetter = keyMap[key];
            const radios = document.querySelectorAll('.optionItem .radio');
            radios.forEach(el => {
                if (el.textContent.trim().toUpperCase() === optionLetter) {
                    el.click();
                }
            });
        }

        // 下一题（空格键）
        if (e.code === 'Space') {
            e.preventDefault(); // 防止页面滚动
            const cards = document.querySelectorAll('.tFCard');
            for (let el of cards) {
                if (el.textContent.includes('下一题')) {
                    el.click();
                    break;
                }
            }
        }

        // 上一题（H键）
        if (e.key.toUpperCase() === 'H') {
            const cards = document.querySelectorAll('.tFCard');
            for (let el of cards) {
                if (el.textContent.includes('上一题')) {
                    el.click();
                    break;
                }
            }
        }
    });
})();
