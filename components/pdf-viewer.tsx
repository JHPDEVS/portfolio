"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  Maximize,
  Minimize,
  FileX,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

interface PDFViewerProps {
  file: string;
  title?: string;
  className?: string;
}

export function PDFViewer({
  file,
  title = "PDFドキュメント",
  className = "",
}: PDFViewerProps) {
  // 状態管理
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [viewMode, setViewMode] = useState<string>("FitH"); // ページ幅に合わせる

  // ファイル存在確認関数
  const checkFileExists = async (url: string) => {
    try {
      console.log("ファイル存在確認中:", url);
      const response = await fetch(url, { method: "HEAD" });
      console.log(
        "ファイル確認レスポンス:",
        response.status,
        response.statusText
      );
      return response.ok;
    } catch (error) {
      console.error("ファイル確認エラー:", error);
      return false;
    }
  };

  // クライアントサイドでのみレンダリング
  useEffect(() => {
    setIsClient(true);

    // ファイル存在確認
    checkFileExists(file).then((exists) => {
      console.log("ファイル存在:", exists);
      setFileExists(exists);
      if (!exists) {
        setError(`PDFファイルが見つかりません: ${file}`);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [file]);

  // 全画面表示切り替え
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // 全画面終了
  const exitFullscreen = () => {
    setIsFullscreen(false);
  };

  // 表示モード変更
  const changeViewMode = (mode: string) => {
    setViewMode(mode);
  };

  // PDFダウンロード
  const downloadPDF = () => {
    try {
      const link = document.createElement("a");
      link.href = file;
      link.download = `${title}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("ダウンロードエラー:", error);
      window.open(file, "_blank");
    }
  };

  // 新しいタブで開く
  const openInNewTab = () => {
    window.open(file, "_blank");
  };

  // サンプルPDF作成案内
  const createSamplePDF = () => {
    alert(
      "サンプルPDFファイルをpublicフォルダに追加してください:\n\n1. public/resume.pdf\n2. public/portfolio.pdf\n\nまたは他のPDFファイルのパスを指定してください。"
    );
  };

  // PDFのURL生成（表示モード付き）
  const getPDFUrl = () => {
    return `${file}#view=${viewMode}&toolbar=1&navpanes=1&scrollbar=1`;
  };

  // 全画面モード
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        {/* 全画面ヘッダー */}
        <div className="flex items-center justify-between p-2 sm:p-4 border-b bg-background/95 backdrop-blur">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <h2 className="text-sm sm:text-lg font-semibold truncate">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* 表示モード選択（モバイル対応） */}
            <div className="flex items-center gap-1">
              <Button
                variant={viewMode === "FitH" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("FitH")}
                disabled={loading || !fileExists}
                className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                title="ページ幅に合わせる"
              >
                幅
              </Button>
              <Button
                variant={viewMode === "FitV" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("FitV")}
                disabled={loading || !fileExists}
                className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                title="ページ高さに合わせる"
              >
                高
              </Button>
              <Button
                variant={viewMode === "Fit" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("Fit")}
                disabled={loading || !fileExists}
                className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                title="ページ全体に合わせる"
              >
                全
              </Button>
            </div>

            {/* アクションボタン */}
            <Button
              variant="outline"
              size="sm"
              onClick={openInNewTab}
              disabled={!fileExists}
              className="px-2 py-1 sm:px-3 sm:py-2"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadPDF}
              disabled={!fileExists}
              className="px-2 py-1 sm:px-3 sm:py-2"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exitFullscreen}
              className="px-2 py-1 sm:px-3 sm:py-2"
            >
              <Minimize className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden lg:inline ml-2">終了</span>
            </Button>
          </div>
        </div>

        {/* 全画面PDF表示エリア */}
        <div className="flex-1 h-[calc(100vh-57px)] sm:h-[calc(100vh-73px)] overflow-auto bg-gray-50 dark:bg-gray-900">
          <div className="flex justify-center items-center min-h-full p-2 sm:p-4">
            {loading && !error && fileExists !== false && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="text-sm text-muted-foreground">
                  PDFを読み込み中...
                </span>
              </div>
            )}

            {(error || fileExists === false) && (
              <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <FileX className="h-12 w-12 text-red-500" />
                <div className="text-center space-y-2">
                  <p className="text-red-500 font-medium">
                    PDFファイルが見つかりません
                  </p>
                  <p className="text-sm text-muted-foreground break-all">
                    {error || `ファイル: ${file}`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={createSamplePDF}
                    >
                      サンプルファイル作成
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setError(null);
                        setLoading(true);
                        setFileExists(null);
                        checkFileExists(file).then((exists) => {
                          setFileExists(exists);
                          setLoading(false);
                        });
                      }}
                    >
                      再試行
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {!loading && !error && fileExists && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <iframe
                  src={getPDFUrl()}
                  className="w-full h-full border-0 rounded-lg shadow-lg"
                  title={title}
                  style={{ minHeight: "calc(100vh - 150px)" }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // サーバーサイドレンダリング時は何も表示しない
  if (!isClient) {
    return (
      <Card className={`w-full mx-auto ${className}`}>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2">初期化中...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full mx-auto ${className}`}>
      <CardHeader className="pb-3 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <CardTitle className="text-lg md:text-xl truncate">{title}</CardTitle>
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={openInNewTab}
              disabled={!fileExists}
              className="flex-1 sm:flex-none"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="ml-2 sm:hidden lg:inline">新しいタブ</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadPDF}
              disabled={!fileExists}
              className="flex-1 sm:flex-none"
            >
              <Download className="h-4 w-4" />
              <span className="ml-2 sm:hidden lg:inline">ダウンロード</span>
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* コントロールバー（モバイル対応） */}
        {!error && fileExists && (
          <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-2 p-3 bg-muted rounded-lg">
            {/* 表示モードコントロール */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground flex-shrink-0">
                表示:
              </span>
              <div className="flex gap-1 overflow-x-auto">
                <Button
                  variant={viewMode === "FitH" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeViewMode("FitH")}
                  disabled={loading}
                  className="flex-shrink-0 text-xs sm:text-sm"
                  title="ページ幅に合わせる"
                >
                  <span className="sm:hidden">幅</span>
                  <span className="hidden sm:inline">幅に合わせる</span>
                </Button>
                <Button
                  variant={viewMode === "FitV" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeViewMode("FitV")}
                  disabled={loading}
                  className="flex-shrink-0 text-xs sm:text-sm"
                  title="ページ高さに合わせる"
                >
                  <span className="sm:hidden">高</span>
                  <span className="hidden sm:inline">高さに合わせる</span>
                </Button>
                <Button
                  variant={viewMode === "Fit" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeViewMode("Fit")}
                  disabled={loading}
                  className="flex-shrink-0 text-xs sm:text-sm"
                  title="ページ全体に合わせる"
                >
                  <span className="sm:hidden">全</span>
                  <span className="hidden sm:inline">ページに合わせる</span>
                </Button>
              </div>
            </div>

            {/* 全画面ボタン */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                disabled={loading}
                className="flex-shrink-0"
              >
                <Maximize className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">全画面</span>
              </Button>
            </div>
          </div>
        )}

        {/* PDF表示エリア */}
        <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-[400px] sm:min-h-[500px]">
          {loading && !error && fileExists !== false && (
            <div className="flex flex-col items-center justify-center h-96 space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="text-sm text-muted-foreground">
                PDFを読み込み中...
              </span>
              <span className="text-xs text-muted-foreground break-all px-4 text-center">
                ファイル: {file}
              </span>
            </div>
          )}

          {(error || fileExists === false) && (
            <div className="flex flex-col items-center justify-center h-96 space-y-4 p-4">
              <FileX className="h-12 w-12 text-red-500" />
              <div className="text-center space-y-2">
                <p className="text-red-500 font-medium">
                  PDFファイルが見つかりません
                </p>
                <p className="text-sm text-muted-foreground break-all">
                  {error || `ファイル: ${file}`}
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" onClick={createSamplePDF}>
                    サンプルファイル作成
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setError(null);
                      setLoading(true);
                      setFileExists(null);
                      checkFileExists(file).then((exists) => {
                        setFileExists(exists);
                        setLoading(false);
                      });
                    }}
                  >
                    再試行
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && fileExists && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={getPDFUrl()}
                className="w-full h-[500px] sm:h-[600px] border-0"
                title={title}
                onLoad={() => console.log("PDF読み込み成功")}
                onError={() => {
                  console.error("PDF読み込みエラー");
                  setError("PDFの読み込みに失敗しました");
                }}
              />
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
