export default {
    svg_height: 300,
    svg_width: 1100,
    svg_dest_width: 1100,
    show_outer: true,
    padding: 5,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['hongkong', 'ktl', '#00AF41', '#fff'],
    direction: 'l',
    current_stn_idx: 'byzb',
    platform_num: '2',
    txt_bg_gap: 15,
    txt_flip: true,
    stn_list: {
        linestart: {
            parents: [],
            children: ['o7qv'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        l1mz: {
            parents: ['ysjb'],
            children: ['iwf6'],
            name: ['何文田', 'Ho Man Tin'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['黃埔', 'Whampoa'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        ysjb: {
            branch: { left: [], right: [] },
            parents: ['2vlg'],
            children: ['l1mz'],
            name: ['油麻地', 'Yau Ma Tei'],
            change_type: 'int2',
            interchange: [[['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫\\往中環', 'Tsuen Wan Line\\to Central']]],
            num: '00',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫\\往中環', 'Tsuen Wan Line\\to Central']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        '2vlg': {
            branch: { left: [], right: [] },
            parents: ['byzb'],
            children: ['ysjb'],
            name: ['旺角', 'Mong Kok'],
            change_type: 'int2',
            interchange: [[['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫\\往荃灣', 'Tsuen Wan Line\\to Tsuen Wan']]],
            num: '00',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫\\往荃灣', 'Tsuen Wan Line\\to Tsuen Wan']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        byzb: {
            branch: { left: [], right: [] },
            parents: ['7cgp'],
            children: ['2vlg'],
            name: ['太子', 'Prince Edward'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        '7cgp': {
            branch: { left: [], right: [] },
            parents: ['fv4r'],
            children: ['byzb'],
            name: ['石硤尾', 'Shek Kip Mei'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        fv4r: {
            branch: { left: [], right: [] },
            parents: ['0p85'],
            children: ['7cgp'],
            name: ['九龍塘', 'Kowloon Tong'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'eal', '#61B4E4', '#fff', '東鐵綫', 'East Rail Line']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        '0p85': {
            branch: { left: [], right: [] },
            parents: ['v1c1'],
            children: ['fv4r'],
            name: ['樂富', 'Lok Fu'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        v1c1: {
            branch: { left: [], right: [] },
            parents: ['1k7y'],
            children: ['0p85'],
            name: ['黃大仙', 'Wong Tai Sin'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        '1k7y': {
            branch: { left: [], right: [] },
            parents: ['uc5y'],
            children: ['v1c1'],
            name: ['鑽石山', 'Diamond Hill'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['hongkong', 'mol', '#9A3820', '#fff', '屯馬綫一期', 'Tuen Ma Line Phase 1']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        uc5y: {
            branch: { left: [], right: [] },
            parents: ['c6q1'],
            children: ['1k7y'],
            name: ['彩虹', 'Choi Hung'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        c6q1: {
            branch: { left: [], right: [] },
            parents: ['6ase'],
            children: ['uc5y'],
            name: ['九龍灣', 'Kowloon Bay'],
            change_type: 'int2',
            interchange: [[['hongkong', 'eal', '#61B4E4', '#fff', '東鐵綫', 'East Rail Line']]],
            num: '00',
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        '6ase': {
            branch: { left: [], right: [] },
            parents: ['ckt3'],
            children: ['c6q1'],
            name: ['牛頭角', 'Ngau Tau Kok'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        ckt3: {
            branch: { left: [], right: [] },
            parents: ['hxxu'],
            children: ['6ase'],
            name: ['觀塘', 'Kwun Tong'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        hxxu: {
            branch: { left: [], right: [] },
            parents: ['awvh'],
            children: ['ckt3'],
            name: ['藍田', 'Lam Tin'],
            change_type: 'none',
            num: '00',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        awvh: {
            branch: { left: [], right: [] },
            parents: ['o7qv'],
            children: ['hxxu'],
            name: ['油塘', 'Yau Tong'],
            change_type: 'int2',
            interchange: [
                [['hongkong', 'tkl', '#A35EB5', '#fff', '將軍澳綫\\往北角', 'Tseung Kwan O Line\\to North Point']],
            ],
            num: '00',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [['hongkong', 'tkl', '#A35EB5', '#fff', '將軍澳綫\\往北角', 'Tseung Kwan O Line\\to North Point']],
                ],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        o7qv: {
            branch: { left: [], right: [] },
            parents: ['linestart'],
            children: ['awvh'],
            name: ['調景嶺', 'Tiu Keng Leng'],
            change_type: 'int2',
            interchange: [
                [
                    [
                        'hongkong',
                        'tkl',
                        '#A35EB5',
                        '#fff',
                        '將軍澳綫\\往寶琳/康城',
                        'Tseung Kwan O Line\\to Po Lam/LOHAS Park',
                    ],
                ],
            ],
            num: '00',
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        [
                            'hongkong',
                            'tkl',
                            '#A35EB5',
                            '#fff',
                            '將軍澳綫\\往寶琳/康城',
                            'Tseung Kwan O Line\\to Po Lam/LOHAS Park',
                        ],
                    ],
                ],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
    },
    line_name: ['觀塘綫', 'Kwun Tong Line'],
    dest_legacy: true,
    char_form: 'trad',
    psd_num: 1,
    line_num: 1,
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
};
