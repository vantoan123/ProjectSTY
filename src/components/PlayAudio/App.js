import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Player from './Player';
export const TRACKS = [
  {
    title: 'Nhạc Thiền - Tĩnh Tâm - An Nhiên Tự Tại',
    artist: 'huyit218',
    albumArtUrl: "http://hocvienthienviet.edu.vn/wp-content/uploads/2017/11/anh-ngoi-thien-dep-nhat.jpg",
    audioUrl: "https://aredir.nixcdn.com/NhacCuaTui887/NhacThienTinhTamAnNhienTuTai-V.A-3798245.mp3?st=JvdKy5oQVu0WXkJXGhzsfw&e=1557628925",
  },
  {
    title: 'Nhạc thiền không lời',
    artist: 'huyit218',
    albumArtUrl: "http://hocvienthienviet.edu.vn/wp-content/uploads/2017/11/anh-ngoi-thien-dep-nhat.jpg",
    audioUrl: "https://aredir.nixcdn.com/NhacCuaTui107/VoUuNhacThien-Hoatau_qkyx.mp3?st=r46SCx0eQ8-qCR-rz7FFGw&e=1557628589",
  },
  {
    title: 'Nhạc thiền phật giáo',
    artist: 'huyit218',
    albumArtUrl: "http://hocthien.vn/wp-content/uploads/bfi_thumb/hinh-anh-thien-su-ngoi-thien-6-nt2f3ps0jzahl8olcky9imlearygsqfoh64snr5wu8.jpg",
    audioUrl: "https://aredir.nixcdn.com/NhacCuaTui106/NhacThien-Hoatau_qadg.mp3?st=_HER42LtUsVe_rkKFG3mgw&e=1557628077",
  },
  {
    title: 'Nhạc thiền buổi sáng',
    artist: 'Diamond Lien',
    albumArtUrl: "http://www.yogaplus.vn/storage/app/uploads/public/59c/1dc/fdc/thumb_895_800x500_0_0_crop.jpg",
    audioUrl: "https://aredir.nixcdn.com/NhacCuaTui981/NgungChiTrichThoiPhanNan-VA-5943200.mp3?st=N2g9s7rpf4UlPpU8r5lUfA&e=1557479071",
  },
  {
    title: 'Nhạc thiền tĩnh tâm',
    artist: 'Diamond Lien',
    albumArtUrl: "http://cafefcdn.com/thumb_w/640/2017/photo-0-1492998150369.png",
    audioUrl: 'https://aredir.nixcdn.com/NhacCuaTui981/GiuBinhTinhHangNgay-VA-5943198.mp3?st=o60BLleF7PNGaqxXiMeYIw&e=1557623236',
  },
  {
    title: 'Thôi nóng nảy tức giận',
    artist: 'Diamond Lien',
    albumArtUrl: 'https://cdnimg.vietnamplus.vn/t620/uploaded/rotnhz/2014_01_07/71_medita_g_20140106183017.jpg',
    audioUrl: 'https://aredir.nixcdn.com/NhacCuaTui981/ThoiNongGianTucThi-VA-5943202.mp3?st=0c3Qm3c11qVnGcWA9NnVrw&e=1557624002',
  },
  {
    title: 'Thiền phục hồi năng lượng',
    artist: 'Diamond Lien',
    albumArtUrl: 'http://giainhan.vn//file_attach/tanbinh/thien-giup-ban-dep-ve-tam-hon-va-hinh-the-1.jpg',
    audioUrl: 'https://aredir.nixcdn.com/NhacCuaTui981/ThienPhucHoiNangLuong-VA-5943201.mp3?st=Y00rg9CFiZOLL6s9y8EmXQ&e=1557623369',
  },

];

export default class App extends Component {
  onClickBack() {
    this.props.navigation.navigate('ListItem');
  }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#000' }}>
          <TouchableOpacity onPress={() => this.onClickBack()}>
            <Text style={{ color: '#EEE', marginTop: 50 }}>Back</Text>
          </TouchableOpacity>
        </View>
        <Player tracks={TRACKS} />
      </View>

    );
  }
}
