const params = {
    style: 'gzmtr',
    svg_height: 350,
    padding: 2.78,
    y_pc: 49.01,
    branch_spacing: 54.37,
    theme: ['saopaulo', 'sp1', '#0153A0', '#fff'],
    direction: 'l',
    current_stn_idx: '1sbo',
    platform_num: '1',
    stn_list: {
        linestart: {
            parents: [],
            children: ['l1mz'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['1sbo'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '24',
            secondaryName: false,
        },
        l1mz: {
            parents: ['linestart'],
            children: ['iwf6'],
            name: ['图库鲁维', 'Tucuruvi '],
            branch: { left: [], right: [] },
            num: '01',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['gtgp'],
            parents: ['l1mz'],
            name: ['巴拉达英格丽莎', 'Parada Inglesa '],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        gtgp: {
            name: ['圣保罗花园·艾尔顿塞纳', 'Jardim São Paulo·Ayrton Senna '],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['iwf6'],
            children: ['fdms'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        fdms: {
            name: ['桑塔纳', 'Santana '],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['gtgp'],
            children: ['92bb'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '92bb': {
            name: ['卡兰迪鲁', 'Carandiru '],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['fdms'],
            children: ['vud4'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        vud4: {
            name: ['葡萄牙·铁特', 'Portuguesa·Tietê '],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['92bb'],
            children: ['yzsy'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        yzsy: {
            name: ['亚美尼亚', 'Armênia '],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['vud4'],
            children: ['ola2'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        ola2: {
            name: ['蒂拉登特斯', 'Tiradentes '],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['yzsy'],
            children: ['c8co'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        c8co: {
            name: ['卢兹', 'Luz '],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['ola2'],
            children: ['h22a'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['saopaulo', 'sp4', '#FED304', '#000', '4号线', 'Line 4'],
                        ['saopaulo', 'sp7', '#9E1766', '#fff', '7号线', 'Line 7'],
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        h22a: {
            name: [' 圣本托', 'São Bento'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['c8co'],
            children: ['qgzs'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        qgzs: {
            name: ['瑟', 'Sé '],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['h22a'],
            children: ['c5az'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['saopaulo', 'sp3', '#EE3E34', '#fff', '3号线', 'Line 3']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        c5az: {
            name: ['日本自由文化街', 'Japão·Liberdade '],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['qgzs'],
            children: ['gwv0'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        gwv0: {
            name: ['圣若阿金', 'São Joaquim '],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['c5az'],
            children: ['gjgs'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['saopaulo', 'sp6', '#F27C00', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        gjgs: {
            name: ['韦尔盖罗', 'Vergueiro '],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['gwv0'],
            children: ['zmhf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        zmhf: {
            name: ['天堂', 'Paraíso '],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['gjgs'],
            children: ['dih2'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['saopaulo', 'sp2', '#008061', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        dih2: {
            name: ['安娜罗莎', 'Ana Rosa '],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['zmhf'],
            children: ['silq'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['saopaulo', 'sp2', '#008061', '#fff', '2号线', 'Line 2']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        silq: {
            name: ['玛丽安娜镇', 'Vila Mariana '],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['dih2'],
            children: ['lwkm'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        lwkm: {
            name: ['圣克鲁斯', 'Santa Cruz '],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['silq'],
            children: ['b2nv'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['saopaulo', 'sp5', '#784D9F', '#fff', '5号线', 'Line 5']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        b2nv: {
            name: ['树林广场', 'Praça da Árvore '],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['lwkm'],
            children: ['fuew'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        fuew: {
            name: ['苏德', 'Saúde '],
            secondaryName: false,
            num: '20',
            services: ['local'],
            parents: ['b2nv'],
            children: ['sysf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        sysf: {
            name: ['圣裘德', 'São Judas '],
            secondaryName: false,
            num: '21',
            services: ['local'],
            parents: ['fuew'],
            children: ['chnl'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        chnl: {
            name: [' 康塞桑', 'Conceição'],
            secondaryName: false,
            num: '22',
            services: ['local'],
            parents: ['sysf'],
            children: ['1sbo'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '1sbo': {
            name: ['贾巴夸拉', 'Jabaquara '],
            secondaryName: false,
            num: '23',
            services: ['local'],
            parents: ['chnl'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
    },
    line_name: ['1号线', 'Line 1'],
    psd_num: '13',
    line_num: '1',
    info_panel_type: 'gz1421',
    direction_gz_x: 5.44,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 2000, runin: 1510, railmap: 1530, indoor: 2000 },
    notesGZMTR: [['六号线和十三号线暂未开通', 'Line 6 and Line 13 are under construction.', 80.5, 78.5, true]],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
