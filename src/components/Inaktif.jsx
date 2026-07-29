import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { id: 1, src: "/assets/md.png", alt: "Modern Dance", art: ["Modern Dance merupakan salah satu kegiatan ekstrakurikuler di SMA Santa Ursula Jakarta yang dirancang untuk menjadi wadah bagi para siswi untuk menyalurkan bakat dan minat dalam seni tari kontemporer. Awal mula sejarah modern dance, bermula di Amerika Serikat dan Eropa. Dalam latihan, siswi diajarkan teknik dasar gerakan, kekompakan tim, hingga koreografi untuk berbagai acara sekolah seperti Open House, dan lainnya. Selain melatih fisik dan kreativitas, ekstrakurikuler ini juga membentuk rasa percaya diri, disiplin, serta kerja sama antaranggota. Siswa yang tergabung dapat mengikuti kompetisi antar sekolah atau tampil dalam acara eksternal, yang menambah pengalaman dan prestasi. Modern dance tidak hanya menghibur, tetapi juga menjadi media ekspresi diri yang positif bagi siswa. Melalui keterlibatan aktif, siswi diharapkan dapat menanamkan nilai-nilai SERVIAM, seperti totalitas, persatuan, keberanian dan ketangguhan.", "Ekstrakurikuler Modern Dance dilaksanakan di ruang tari SMA seminggu sekali tiap hari Rabu pukul 14.15 hingga 15.35, dipandu oleh pelatih. Kegiatan Modern Dance dimulai dengan pelatih memasuki ruang tari dan siswi mengisi absensi. Kemudian, pelatih dan para siswi akan melakukan pemanasan terlebih dahulu sebelum latihan dimulai. Biasanya pelatih akan mengajarkan koreografi secara bertahap lalu diselingi dengan istirahat. Setelah koreografi selesai, biasanya pelatih akan melakukan review bersama, ataupun observasi kemampuan masing-masing siswa dalam mengikuti koreografinya.", "Apa saja yang dipelajari dalam ekstrakurikuler Modern Dance? Dalam ekstrakurikuler Modern Dance, para siswi mempelajari  teknik dasar gerakan, koreografi, serta kekompakan tim.", "Apakah harus punya pengalaman menari untuk ikut ekskul ini? Tidak harus. Ekstrakurikuler Modern Dance terbuka untuk semua siswi, baik yang sudah berpengalaman maupun pemula. Latihan akan bertahap, disesuaikan dengan kemampuan siswa. Siswa yang merasa kesulitan dapat meminta bimbingan lebih kepada pelatih selama pembelajaran.", "Apa manfaat ikut ekskul modern dance? Manfaatnya antara lain melatih kebugaran fisik, meningkatkan rasa percaya diri, melatih kerja sama tim, dan menjadi sarana menyalurkan kreativitas serta ekspresi diri.", "Apa perbedaan antara RBS dan Modern Dance? RBS (akronim dari Real Beauty Sanurian) merupakan salah satu komunitas Dance SMA Santa Ursula Jakarta yang berfokus pada liga perlombaan DBL Dance Competition Central Region (wilayah Pusat) mewakili SMA Santa Ursula Jakarta. Sementara, Modern Dance merupakan salah satu ekstrakurikuler yang biasanya tampil untuk internal sekolah, maupun lomba-lomba eksternal lainnya selain DBL. Siswi yang mendaftar ke dalam ekstrakurikuler Modern Dance tidak 100% akan langsung diterima karena harus tetap melalui serangkaian proses audisi serta seleksi ketat untuk menjadi bagian dari anggota RBS. Proses latihan serta rutinitas antara RBS dan Modern Dance juga cenderung berbeda."] },
  { id: 2, src: "/assets/physicsc.png", alt: "Physics Club", art: ["Physics Club merupakan ekstrakurikuler yang dapat menumbuhkan pemahaman lebih dalam tentang ilmu fisika dalam kehidupan sehari-hari. Pemahaman tersebut dibantu dengan tidak hanya pembuatan laporan teoritikal saja, tetapi ada pula praktikum yang edukatif, interaktif, dan menyenangkan dalam ekstrakurikuler. Kegiatan-kegiatan tersebut meningkatkan semangat para siswi untuk memiliki rasa ingin tahu tinggi agar dapat menggali lebih dalam mengenai banyak hal. Misalnya, cara kerja alat sehari-hari melalui konsep-konsep fisika. ", "Proyek yang diberikan melatih kemampuan akademik dan praktis para siswi; Akademik dari segi pembelajaran konsep fisika serta Praktis dapat dari penerapan langsung pembuatan proyek. Dengan proyek menarik dan menantang selama ekstrakurikuler, tidak hanya membantu para siswi untuk mendapatkan ilmu, tetapi juga pendalaman nilai karakter SERVIAM. Salah satu nilai karakter SERVIAM yang dapat diteladani adalah Ketangguhan. Hal ini dikarenakan selama mengerjakan beberapa proyek praktikum tidak selalu semuanya berjalan lancar. Maka dari itu, perlu adanya daya juang tinggi untuk terus berusaha mencoba berulang kali demi keberhasilan praktikum. Nilai SERVIAM seperti persatuan juga tercermin dalam pelaksanaan praktikum secara kelompok yang menumbuhkan kerja sama baik antar sesama siswi. Dengan demikian, ekstrakurikuler Physics Club tidak hanya memperdalam pengetahuan fisika, namun juga membentuk karakter para siswi.", "Physics club dilaksanakan setiap minggu pada hari Rabu. Terdapat berbagai aktivitas serta kegiatan yang difasilitasi selama berjalannya ekstrakurikuler physics club. Misalnya: pengerjaan proyek praktikum, menuliskan jurnal, dan masih banyak lagi. Proyek yang dilaksanakan tidak hanya bersifat teoritis, tetapi juga edukatif, interaktif, serta menyenangkan. Proyek yang dilakukan juga berfokus dalam menjelaskan aspek fisika dalam kehidupan sehari-hari, seperti cara kerja kamera lubang jarum yang merupakan kamera tradisional dengan konsep teori fisika.", "Apakah saya harus memiliki pengetahuan yang kuat mengenai fisika untuk bergabung? Tidak sama sekali, ekskul ini tidak bergantung dengan angka / nilai siswi terhadap mata pelajaran fisika, tetapi sangat terbuka bagi para siswi yang mempunyai minat serta ketertarikan tinggi terhadap fisika.", "Mengapa saya harus bergabung physics club? Physics club memberikan tidak hanya ilmu tetapi juga pengalaman proyek praktikum nyata. Pengalaman tersebut dapat digunakan nanti di perguruan tinggi maupun membuka wawasan dan pandangan baru terhadap suatu hal.  Physics club juga menjadi ruang terbuka, edukatif, inspiratif, serta menyenangkan untuk menggali lebih dalam ketertarikan dalam mempelajari lebih dalam konsep fisika diluar dari apa yang diajarkan di kelas.", "Apakah ada kompetisi atau event yang bisa diikuti? Selama mengikuti ekskul, para siswi diperkenankan untuk berpartisipasi / ikut ambil bagian dalam kompetisi fisika di luar sekolah dengan bimbingan guru ekskul. Sekolah juga memfasilitasi perlombaan serta pendampingan untuk olimpiade fisika bagi para siswi yang tertarik untuk bergabung dalam physics club."] },
  { id: 3, src: "/assets/basket.png", alt: "Basket", art: ["Basket merupakan salah satu kegiatan ekstrakurikuler bidang olahraga yang ada di SMA Santa Ursula Jakarta. Sejarah basket dimulai pada 21 Desember 1891 oleh Dr. James Naismith di Massachusetts, AS, yang kemudian berkembang menjadi salah satu cabang olahraga yang diminati oleh seluruh dunia. Ekstrakurikuler basket melatih kemampuan siswi dalam melakukan permainan bola basket. Siswi akan dilatih mulai dari basic skill dalam basket, seperti menggiring bola (dribbling), mengoper bola (passing), melempar bola (shooting), dan menangkap bola (catching). Tidak hanya itu, siswi juga akan dilatih cara melakukan free throw, rebound, lay-up shoot, under basket, pivot, dan masih banyak lagi. Sebelum latihan selesai, akan diadakan game, di mana para siswi akan dibagi menjadi 2 kelompok dan bertanding seperti lomba basket pada umumnya.", "Sebagai sekolah yang berlandaskan pada nilai karakter SERVIAM, ekstrakurikuler basket ikut melatih siswi untuk menghidupi nilai-nilai SERVIAM, seperti persatuan, cinta dan belas kasih, keberanian dan ketangguhan, serta totalitas. Kebersamaan dan kerjasama antar anggota di ekstrakurikuler basket menumbuhkan persatuan serta cinta dan belas kasih di dalam diri siswi. Sedangkan keberanian dan ketangguhan didapatkan dari latihan basket itu sendiri. Dalam basket, siswi harus melakukan shooting, seperti free throw, lay-up, under basket, three point, dan lainnya. Dalam melakukan shooting, dibutuhkan tenaga yang kuat dan kepercayaan diri agar shoot berhasil masuk. Hal ini melatih keberanian dan ketangguhan diri siswi, sekaligus membuat siswi berusaha latihan dengan maksimal dan totalitas.", "Ekstrakurikuler Basket dilaksanakan setiap hari Senin setelah Humaniora, mulai pukul 15.45 hingga 16.30 WIB yang berlokasi di lapangan SD Santa Ursula Jakarta. Namun, lokasi kegiatan bersifat tentatif dan dapat berubah sewaktu-waktu jika terjadi hambatan cuaca atau jika lapangan sedang digunakan untuk kegiatan lain. Ekstrakurikuler basket akan dimulai dengan doa bersama dahulu di tengah lapangan, yang dilanjutkan oleh pemanasan dan peregangan otot untuk menghindari cedera.", "Sebagian besar sesi latihan difokuskan untuk melatih keterampilan dasar bermain basket para siswi dengan melakukan latihan-latihan khusus yang dirancang pelatih untuk meningkatkan keterampilan dasar seperti menggiring bola, mengoper, menembak, dan lain-lainnya. Setelah latihan selesai, siswi akan membentuk dua kelompok untuk bermain game untuk melatih skill permainan bola basket di lapangan, atau bahkan seluruh sesi latihan pada hari itu juga dihabiskan untuk hanya bermain game saja. Setelah kegiatan berlangsung, akan dilakukan pendinginan otot di tengah lapangan dan berdoa bersama, sebelum diakhiri dengan melakukan yel-yel dengan semua tangan di depan dan bergiliran untuk tos setiap peserta. Sesekali, anggota ekskul basket juga mendapatkan kesempatan untuk melakukan sparing bersama anggota-anggota dari tim basket DBL SMA Santa Ursula Jakarta, guna menambah pengalaman.", "Apakah dengan masuk ekstrakurikuler basket, siswi otomatis menjadi tim DBL SMA Santa Ursula Jakarta? Siswi tidak otomatis menjadi tim DBL sekolah, karena perlu adanya seleksi ketat mengenai skill basket yang tinggi dan pengalaman berlomba untuk dapat masuk ke dalam tim DBL. Akan tetapi, dengan siswi masuk dan mengikuti ekstrakurikuler basket, harapannya siswi dapat berkembang dan mewakili sekolah dalam mengikuti lomba-lomba basket, sebelum nantinya mengikuti tim DBL.", "Apakah perlu untuk membawa perlengkapan basket sendiri selama latihan? Tidak, siswi tidak perlu membawa perlengkapan basket sendiri. Siswi hanya diharuskan untuk membawa pakaian dan sepatu olahraga bebas, serta botol minum pribadi. Bola, lapangan basket, serta cone latihan sudah difasilitasi oleh sekolah.", "Jika besok ada ulangan, apakah siswi tetap harus mengikuti ekstrakurikuler basket dari awal sampai selesai? Tidak, jika besoknya ada ulangan, siswi dapat meminta izin untuk mengikuti ekstrakurikuler hanya setengah jam kepada guru pelatih. Asalkan siswi sudah memberi informasi kepada pelatih, tentu saja pelatih akan mengizinkan siswi untuk pulang lebih dahulu dan mempersiapkan ulangan."] },
]

export default function Attachments() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {IMAGES.map((img) => (
          <Grid item xs={12} sm={6} md={4} key={img.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                width: {
                  xs: "300px",
                  sm: "400px",
                  md: "300px",
                  lg: "300px"
                },
                height: '100%',
                backgroundColor: "#ffffff77",
              }}
              onClick={() => handleClick(img)}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontFamily: 'Konthen', color: 'tertiary.main' }}>
                {img.alt}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 50,
              right: 70,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box sx={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                p: 5,
            }}>
                <Typography variant="h4" sx={{ color: "secondary.main", textAlign: "center", mb: 2, fontFamily: 'Konthen' }}>
                    {selectedImage.alt}
                </Typography>
                <Box>
                  {selectedImage.art.map((paragraph, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: "quaternary.main",
                        textAlign: "justify",
                        mb: 2,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}
