const routeList = [
    {
        name:'首页',
        id:'000',
        children:[{
            id:'999',
            name:'工作台',
            path: "indexPage"
        }]
    },
    {
        name: 'CSS新特性',
        id: '001',
        children: [
            {
                id: '101',
                name: "Css3特性",
                path: "HelloWorld"
            },
        ]
    },
    {
        name: '数组处理方法',
        id: '002',
        children: [
            {
                id: '201',
                name: '一维变二维',
                path: 'twoArray'
            }

        ]
    }, {
        name: '常见方法',
        id: '003',
        children: [
            {
                id: '301',
                name: "防抖点击",
                path: "shakeProof"
            },
            {
                id: '302',
                name: '图片预览',
                path: 'preview'
            },
            {
                id: '303',
                name: 'divLength',
                path: 'divLength'
            },{
                id: '304',
                name: 'newUpload',
                path: 'newUpload'
            }
        ]
    }, {
        name: '一些功能',
        id: '004',
        children: [
            {
                id: '401',
                name: 'html2canvas',
                path: 'html2canvas'
            }, {
                id: '402',
                name: 'imageNum',
                path: 'imageNum'
            },
        ]
    }, {
        id: '005',
        name: 'elementUI功能',
        children: [
            {
                id: '501',
                name: 'tablePage',
                path: 'tablePage'
            }, {
                id: '502',
                name: 'Cascader',
                path: 'Cascader'
            },{
                id: '503',
                name: 'upload',
                path: 'upload'
            }
        ]
    },
]

export default routeList